import * as SQLite from 'expo-sqlite';
import dayjs from 'dayjs';
import { ThemeProvider } from '@react-navigation/native';

// Open the database
const db = SQLite.openDatabaseSync('expenses.db');

// Database Initialization
export const initDatabase = async () => {
  try {
    // Create Categories Table
    db.execSync(`
      CREATE TABLE IF NOT EXISTS categories (
        category_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE NOT NULL,
        cat_color TEXT UNIQUE NOT NULL
      );
    `);

    // Create Expenses Table
    db.execSync(`
      CREATE TABLE IF NOT EXISTS expenses (
        expense_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        cost REAL NOT NULL,
        description TEXT,
        date TEXT NOT NULL,
        month INTEGER NOT NULL,
        category INTEGER,
        FOREIGN KEY (category) REFERENCES categories (category_id)
      );
    `);

    console.log('Database tables created successfully');
    return true;
  } catch (error) {
    console.error('Error initializing database', error);
    throw error;
  }
};

// Add Expense
export const addExpense = async (name, cost, description, date, month, category) => {
  const formattedDate = dayjs(date).format('YYYY-MM-DD');
  
  try {
    const result = db.runSync(
      `INSERT INTO expenses (name, cost, description, date, month, category) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, cost, description, formattedDate, month, category]
    );
    console.log('Expense added successfully', result);
    return result.lastInsertRowId;
  } catch (error) {
    console.error('Error adding expense', error);
    throw error;
  }
};

// Get Monthly Expenses
export const getMonthlyExpenses = async () => {
  try {
    const result = db.getFirstSync(
      `SELECT SUM(cost) as total FROM expenses WHERE month = ?`,
      [new Date().getMonth() + 1]
    );
    return result?.total ?? 0;
  } catch (error) {
    console.error('Error summing monthly expenses', error);
    return 0;
  }
};

// Get Last Week Expenses
export const getLastWeekExpenses = async () => {
  const lastWeekExpenses = [];
  
  try {
    for (let i = 6; i >= 0; i--) {
      const date = dayjs().subtract(i, 'day').format('YYYY-MM-DD');
      const result = db.getFirstSync(
        `SELECT SUM(cost) AS total FROM expenses WHERE date = ?`,
        [date]
      );
      lastWeekExpenses.push({date,expense:(result?.total ?? 0)});
    }
    console.log(lastWeekExpenses);
    return lastWeekExpenses;
  } catch (error) {
    console.error('Error fetching last week expenses', error);
    return new Array(7).fill(0);
  }
};

// Get All Expenses
export const getAllExpenses = async () => {
  try {
    return db.getAllSync(`SELECT * FROM expenses`);
  } catch (error) {
    console.error('Error getting all expenses', error);
    return [];
  }
};

// Get Today's Expenses
export const getTodayExpenses = async () => {
  const today = dayjs().format('YYYY-MM-DD');
  try {
    return db.getAllSync(
      `SELECT * FROM expenses WHERE date = ?`,
      [today]
    );
  } catch (error) {
    console.error('Error getting today\'s expenses', error);
    return [];
  }
};

// Delete All Expenses
export const deleteAllExpenses = async () => {
  try {
    db.runSync(`DELETE FROM expenses`);
    console.log('All expenses deleted successfully');
    return true;
  } catch (error) {
    console.error('Error deleting all expenses', error);
    throw error;
  }
};

// Delete Specific Expense
export const deleteExpense = async (id) => {
  try {
    db.runSync(
      `DELETE FROM expenses WHERE expense_id = ?`,
      [id]
    );
    console.log('Expense deleted successfully');
    return true;
  } catch (error) {
    console.error('Error deleting specific expense', error);
    throw error;
  }
};

// Get Sum of Month's Expenses
export const getSumOfMonthExpenses = async () => {
  try {
    const result = db.getFirstSync(
      `SELECT SUM(cost) as total FROM expenses WHERE month = ?`,
      [new Date().getMonth() + 1]
    );
    return result?.total ?? 0;
  } catch (error) {
    console.error('Error summing month expenses', error);
    return 0;
  }
};

// Get Last Added Expense
export const getLastAddedExpense = async () => {
  try {
    return db.getAllSync(
      `SELECT * FROM expenses ORDER BY expense_id DESC LIMIT 1`
    );
  } catch (error) {
    console.error('Error getting last added expense', error);
    return [];
  }
};

// Debug: Log All Expenses
export const logAllExpenses = async () => {
  try {
    const expenses = db.getAllSync(`SELECT * FROM expenses`);
    console.log('All expenses:', expenses);
    return expenses;
  } catch (error) {
    console.error('Error logging expenses', error);
    return [];
  }
};

export const addCategory = async (name, color) => {
  try {
    const result = db.runSync(
      `INSERT INTO categories (name, cat_color) VALUES (?, ?)`,
      [name, color]
    );
    console.log('Category added successfully', result);
    return result.lastInsertRowId;
  } catch (error) {
    console.error('Error adding Category', error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const results = db.getAllSync(
      `SELECT category_id, name, cat_color FROM categories ORDER BY name`
    );
    return results;
  } catch (error) {
    console.error('Error retrieving categories', error);
    throw error;
  }
};

export const deleteCategariesTable = async () => {
  try {
    db.execSync('DROP TABLE IF EXISTS categories');
    console.log('Categories table deleted successfully');
    return true;
  } catch (error) {
    console.error('Error deleting categories table', error);
    throw error;
  }
};

export const deleteCategory = async (name) => {
  try {
    // First, delete associated expenses
    db.runSync(
      `DELETE FROM expenses WHERE category = ?`,
      [name]
    );

    // Then, delete the category
    db.runSync(
      `DELETE FROM categories WHERE name = ?`,
      [name]
    );

    console.log('Category and associated expenses deleted successfully');
    return true;
  } catch (error) {
    console.error('Error deleting specific Category', error);
    throw error;
  }
};

export const deleteExpensesTable = async () => {
  try {
    db.execSync('DROP TABLE IF EXISTS expenses');
    console.log('Categories table deleted successfully');
    return true;
  } catch (error) {
    console.error('Error deleting categories table', error);
    throw error;
  }
};

export const sumofCategory = async (name) => {
  try { 
    const result = db.getFirstSync(
      `SELECT SUM(cost) as total FROM expenses WHERE category = ?`,
      [name]
    );
    const sum = result ? result['total'] || 0 : 0;
    console.log(sum)
    return sum;
  } catch (e) {
    console.log("Error getting Sum of Expenses in the Category");
    throw e;
  }
}
 
// Modified database query function
export const topThreeCatogories = async () => {
  try {
    // Fetch all categories, including those with 0 cost
    const allCategories = await db.getAllSync(
      `SELECT category as name, COALESCE(SUM(cost), 0) as value 
       FROM expenses
       GROUP BY category 
       ORDER BY value DESC`
    );

    // Fetch all unique category names from the database
    const allCategoryNames = await db.getAllSync(
      `SELECT DISTINCT category as name 
       FROM expenses`
    );

    // Take the top 3 categories based on value
    const topCategories = allCategories.slice(0, 3);

    // If there are fewer than 3 categories, pad the result with actual category names
    if (topCategories.length < 3) {
      // Find categories that are not already in the topCategories
      const remainingCategories = allCategoryNames
        .filter((cat) => !topCategories.some((topCat) => topCat.name === cat.name))
        .slice(0, 3 - topCategories.length);

      // Add these categories with a value of 0
      remainingCategories.forEach((cat) => {
        topCategories.push({ name: cat.name, value: 0 });
      });
    }

    console.log("Top 3 categories:", topCategories);
    return topCategories;
  } catch (e) {
    console.log("Error getting Top 3 Categories:", e);
    throw e;
  }
};

export const sumofAllCategories = async () => {
  try {
    const result = db.getAllSync(
      `SELECT category,SUM(cost) as total, cat_color FROM expenses join categories on
      expenses.category=categories.name
      GROUP BY category ORDER BY category`
    );
    console.log(result);
    return result;
  } catch (e) {
    console.log("Error getting Sum of all categories");
    throw e;
  }
}

db.execSync(`
  CREATE TABLE IF NOT EXISTS streak_tracking (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    last_entry_date TEXT NOT NULL,
    current_streak INTEGER DEFAULT 0,
    max_streak INTEGER DEFAULT 0,
    start_date TEXT NOT NULL
  );
`);


export const existingStreak = async () => {
  try {
    const result = db.getFirstSync(
      `SELECT * FROM streak_tracking`
    );
    console.log(result);
    return result;
  } catch (e) {
    console.log("Error getting Sum of all categories");
    throw e;
  }
}
  if (!existingStreak) {
    db.runSync(
      `INSERT INTO streak_tracking (last_entry_date, current_streak, max_streak, start_date) 
       VALUES (?, ?, ?, ?)`,
      [dayjs().format('YYYY-MM-DD'), 0, 0, dayjs().format('YYYY-MM-DD')]
    );
  }

// Streak tracking function
const updateStreak = async (currentDate) => {
  try {
    // Get current streak information
    const streakInfo = db.getFirstSync('SELECT * FROM streak_tracking');
    
    if (!streakInfo) {
      // If no streak info exists, create initial record
      db.runSync(
        `INSERT INTO streak_tracking (last_entry_date, current_streak, max_streak, start_date) 
         VALUES (?, ?, ?, ?)`,
        [currentDate, 1, 1, currentDate]
      );
      return;
    }
    
    const lastEntryDate = dayjs(streakInfo.last_entry_date);
    const currentStreak = streakInfo.current_streak;
    const maxStreak = streakInfo.max_streak;
    const startDate = dayjs(streakInfo.start_date);
    
    // Calculate new streak information
    const daysSinceLastEntry = currentDate.diff(lastEntryDate, 'days');
    const newStreak = daysSinceLastEntry === 1 ? currentStreak + 1 : 1;
    const newMaxStreak = newStreak > maxStreak ? newStreak : maxStreak;
    
    // Update the database
    db.runSync(
      `UPDATE streak_tracking SET last_entry_date = ?, current_streak = ?, max_streak = ? WHERE id = ?`,
      [currentDate.format('YYYY-MM-DD'), newStreak, newMaxStreak, 1]
    );
  } catch (error) {
    console.error('Error updating streak', error);
  }
};

