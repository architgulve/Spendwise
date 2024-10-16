import * as SQLite from 'expo-sqlite/legacy';

const db = SQLite.openDatabase('expenses.db');

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS expenses (
        expense_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        cost REAL,
        description TEXT,
        date TEXT,
        month INTEGER,
        category TEXT
        quantity INTEGER
      );`,
      [],
      () => {
        console.log('Table created successfully');
        resolve(true);
      },
      (_, error) => {
        console.log('Error creating table', error);
        reject(error);
      }
    );
  });
  resolve( true );
  reject( error );
});
};

export const addExpense = (name, cost, description, date, month, category) => {
  return new Promise((resolve, reject) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO expenses (name, cost, description, date, month, category) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, cost, description, date, month, category],
      (_, result) => {
        console.log('Expense added successfully', result);
        resolve(result.insertId);
      },
      (_, error) => {
        console.log('Error adding expense', error);
        reject(error);
      }
    );
  });
  resolve( true );
  reject( error );
});
};

export const getExpenses = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM expenses`,
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          console.log('Error getting expenses', error);
          reject(error);
        }
      );
    });
  });
};

export const getTodayExpenses = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM expenses WHERE date = ?`,
        [new Date().toISOString().slice(0, 10)],
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          console.log('Error getting today\'s expenses', error);
          reject(error);
        }
      );
    }); 
  });
};

export const deleteallExpenses = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM expenses`,
        [],
        (_, result) => {
          console.log('All expenses deleted successfully', result);
          resolve(result);
        },
        (_, error) => {
          console.log('Error deleting expenses', error);
          reject(error);
        }
      );
    });
  });
};

export const deleteExpense = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM expenses WHERE expense_id = ?`,
        [id],
        (_, result) => {
          console.log('Expense deleted successfully', result);
          resolve(result);
        },
        (_, error) => {
          console.log('Error deleting expense', error);
          reject(error);
        }
      );
    }); 
  });
};

export const summonthExpenses = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT SUM(cost) as total FROM expenses WHERE month = ?`,
        [new Date().getMonth() + 1],
        (_, { rows }) => {
          const total = rows.item(0).total;
          resolve(total || 0);
        },
        (_, error) => {
          console.log('Error summing expenses', error);
          reject(error);
        }
      );
    });
  });
};

export const logrows = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM expenses`,
        [],
        (_, { rows }) =>{
          console.log(rows._array);
          resolve(rows._array)
        }, 
        (_, error) => {
          console.log('Error getting expenses', error);
          reject(error);
        }
      );
    });
  });
};

export const lastExpense = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(  
        `SELECT * FROM expenses ORDER BY expense_id DESC LIMIT 1`,
        [], 
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          console.log('Error getting expenses', error);
          reject(error);
        }
      );
    });
  });
};
