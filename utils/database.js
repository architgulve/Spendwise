// // import * as SQLite from 'expo-sqlite/legacy';
// // import dayjs from 'dayjs';


// // const db = SQLite.openDatabase('expenses.db');

// // export const initDatabase = () => {
// //   return new Promise((resolve, reject) => {
// //   db.transaction(tx => {
// //     tx.executeSql(
// //       `CREATE TABLE IF NOT EXISTS expenses (
// //         expense_id INTEGER PRIMARY KEY AUTOINCREMENT,
// //         name TEXT,
// //         cost REAL,
// //         description TEXT,
// //         date TEXT,
// //         month INTEGER,
// //         category TEXT
// //         quantity INTEGER
// //       );`,
// //       [],
// //       () => {
// //         console.log('Table created successfully');
// //         resolve(true);
// //       },
// //       (_, error) => {
// //         console.log('Error creating table', error);
// //         reject(error);
// //       }
// //     );
// //   });
// //   resolve( true );
// //   reject( error );
// // });
// // };

// // export const addExpense = (name, cost, description, date, month, category) => {
// //   return new Promise((resolve, reject) => {
// //   db.transaction(tx => {
// //     tx.executeSql(
// //       `INSERT INTO expenses (name, cost, description, date, month, category) VALUES (?, ?, ?, ?, ?, ?)`,
// //       [name, cost, description, date, month, category],
// //       (_, result) => {
// //         console.log('Expense added successfully', result);
// //         resolve(result.insertId);
// //       },
// //       (_, error) => {
// //         console.log('Error adding expense', error);
// //         reject(error);
// //       }
// //     );
// //   });
// //   resolve( true );
// //   reject( error );
// // });
// // };

// // export const datamonthlyExpenses = () => {
// //   return new Promise((resolve, reject) => {
// //     db.transaction(tx => {
// //       tx.executeSql(
// //         `SELECT SUM(cost) as total FROM expenses WHERE month = ?`,
// //         [new Date().getMonth() + 1],
// //         (_, { rows }) => {
// //           const total = rows.item(0).total;
// //           resolve(total || 0);
// //         },
// //         (_, error) => {
// //           console.log('Error summing expenses', error);
// //           reject(error);
// //         }
// //       );
// //     });
// //   });
// // };


// // // export const getLastWeekExpenses = async () => {
// // //   try {
// // //     const today = dayjs();
// // //     const lastWeekExpenses = [];

// // //     for (let i = 6; i >= 0; i--) {
// // //       const date = today.subtract(i, 'day');
// // //       const monthNumber = date.month() + 1;
// // //       const dailyExpenses = await datamonthlyExpenses(monthNumber, date.date());
// // //       // lastWeekExpenses.push(dailyExpenses!=null ?dailyExpenses:0);
// // //       lastWeekExpenses.push(dailyExpenses || 0);
// // //     }

// // //     return lastWeekExpenses;
// // //   } catch (error) {
// // //     console.error('Error fetching last week expenses:', error);
// // //     throw error;
// // //   }
// // // };

// // export const getLastWeekExpenses = () => {
// //   return new Promise(async (resolve, reject) => {
// //     try {
// //       const today = dayjs();
// //       const lastWeekExpenses = [];

// //       // Run a single transaction for better performance
// //       db.transaction((tx) => {
// //         for (let i = 6; i >= 0; i--) {
// //           const date = today.subtract(i, 'day').format("YYYY-MM-DD");

// //           tx.executeSql(
// //             `SELECT SUM(cost) AS total FROM expenses WHERE date = ?`,
// //             [date],
// //             (_, { rows }) => {
// //               const total = rows.item(0)?.total || 0; // Use the first row or default to 0
// //               lastWeekExpenses.push(total);

// //               // Resolve only after the last query
// //               if (lastWeekExpenses.length === 7) {
// //                 resolve(lastWeekExpenses);
// //               }
// //             },
// //             (_, error) => {
// //               console.error("Error fetching expenses for date:", date, error);
// //               reject(error);
// //             }
// //           );
// //         }
// //       });
// //     } catch (error) {
// //       console.error("Error fetching last week expenses:", error);
// //       resolve([0, 0, 0, 0, 0, 0, 0]); // Return default values on error
// //     }
// //   });
// // };


 

// // export const getExpenses = () => {
// //   return new Promise((resolve, reject) => {
// //     db.transaction(tx => {
// //       tx.executeSql(
// //         `SELECT * FROM expenses`,
// //         [],
// //         (_, { rows }) => resolve(rows._array),
// //         (_, error) => {
// //           console.log('Error getting expenses', error);
// //           reject(error);
// //         }
// //       );
// //     });
// //   });
// // };

// // export const getTodayExpenses = () => {
// //   return new Promise((resolve, reject) => {
// //     db.transaction(tx => {
// //       tx.executeSql(
// //         `SELECT * FROM expenses WHERE date = ?`,
// //         [new Date().toISOString().slice(0, 10)],
// //         (_, { rows }) => resolve(rows._array),
// //         (_, error) => {
// //           console.log('Error getting today\'s expenses', error);
// //           reject(error);
// //         }
// //       );
// //     }); 
// //   });
// // };

// // export const deleteallExpenses = () => {
// //   return new Promise((resolve, reject) => {
// //     db.transaction(tx => {
// //       tx.executeSql(
// //         `DELETE FROM expenses`,
// //         [],
// //         (_, result) => {
// //           console.log('All expenses deleted successfully', result);
// //           resolve(result);
// //         },
// //         (_, error) => {
// //           console.log('Error deleting expenses', error);
// //           reject(error);
// //         }
// //       );
// //     });
// //   });
// // };

// // export const deleteExpense = (id) => {
// //   return new Promise((resolve, reject) => {
// //     db.transaction(tx => {
// //       tx.executeSql(
// //         `DELETE FROM expenses WHERE expense_id = ?`,
// //         [id],
// //         (_, result) => {
// //           console.log('Expense deleted successfully', result);
// //           resolve(result);
// //         },
// //         (_, error) => {
// //           console.log('Error deleting expense', error);
// //           reject(error);
// //         }
// //       );
// //     }); 
// //   });
// // };

// export const summonthExpenses = () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         `SELECT SUM(cost) as total FROM expenses WHERE month = ?`,
//         [new Date().getMonth() + 1],
//         (_, { rows }) => {
//           const total = rows.item(0).total;
//           resolve(total || 0);
//         },
//         (_, error) => {
//           console.log('Error summing expenses', error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // export const logrows = () => {
// //   return new Promise((resolve, reject) => {
// //     db.transaction(tx => {
// //       tx.executeSql(
// //         `SELECT * FROM expenses`,
// //         [],
// //         (_, { rows }) =>{
// //           console.log(rows._array);
// //           resolve(rows._array)
// //         }, 
// //         (_, error) => {
// //           console.log('Error getting expenses', error);
// //           reject(error);
// //         }
// //       );
// //     });
// //   });
// // };

// // export const lastExpense = () => {
// //   return new Promise((resolve, reject) => {
// //     db.transaction(tx => {
// //       tx.executeSql(  
// //         `SELECT * FROM expenses ORDER BY expense_id DESC LIMIT 1`,
// //         [], 
// //         (_, { rows }) => resolve(rows._array),
// //         (_, error) => {
// //           console.log('Error getting expenses', error);
// //           reject(error);
// //         }
// //       );
// //     });
// //   });
// // };


// import * as SQLite from 'expo-sqlite';

// const db = SQLite.openDatabaseSync('expenses.db');

// // Initialize Database
// export const initDatabase = () => {
//   try {
//     db.execSync(`
//       CREATE TABLE IF NOT EXISTS expenses (
//         expense_id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT,
//         cost REAL,
//         description TEXT,
//         date TEXT,
//         month INTEGER,
//         category TEXT
//       );
//     `);
//     console.log('Table created successfully');
//     return true;
//   } catch (error) {
//     console.log('Error creating table', error);
//     throw error;
//   }
// };
// // Add Expense
// export const addExpense = (name, cost, description, date, month, category) => {
//   const formattedDate = dayjs(date).format('YYYY-MM-DD'); // Ensure proper date format
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         `INSERT INTO expenses (name, cost, description, date, month, category) VALUES (?, ?, ?, ?, ?, ?)`,
//         [name, cost, description, formattedDate, month, category],
//         (_, result) => {
//           console.log('Expense added successfully', result);
//           resolve(result.insertId);
//         },
//         (_, error) => {
//           console.log('Error adding expense', error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Get Monthly Expenses
// export const datamonthlyExpenses = () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         `SELECT SUM(cost) as total FROM expenses WHERE month = ?`,
//         [new Date().getMonth() + 1],
//         (_, { rows }) => {
//           const total = rows.item(0)?.total || 0;
//           resolve(total);
//         },
//         (_, error) => {
//           console.log('Error summing expenses', error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Get Last Week Expenses
// export const getLastWeekExpenses = () => {
//   return new Promise((resolve, reject) => {
//     const today = dayjs();
//     const lastWeekExpenses = [];
//     db.transaction(tx => {
//       for (let i = 6; i >= 0; i--) {
//         const date = today.subtract(i, 'day').format('YYYY-MM-DD');
//         tx.executeSql(
//           `SELECT SUM(cost) AS total FROM expenses WHERE date = ?`,
//           [date],
//           (_, { rows }) => {
//             const total = rows.item(0)?.total || 0;
//             lastWeekExpenses.push(total);
//             if (lastWeekExpenses.length === 7) {
//               resolve(lastWeekExpenses);
//             }
//           },
//           (_, error) => {
//             console.error('Error fetching expenses for date:', date, error);
//             reject(error);
//           }
//         );
//       }
//     });
//   });
// };

// // Get All Expenses
// export const getExpenses = () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         `SELECT * FROM expenses`,
//         [],
//         (_, { rows }) => resolve(rows._array),
//         (_, error) => {
//           console.log('Error getting expenses', error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Get Today's Expenses
// export const getTodayExpenses = () => {
//   return new Promise((resolve, reject) => {
//     const today = dayjs().format('YYYY-MM-DD');
//     db.transaction(tx => {
//       tx.executeSql(
//         `SELECT * FROM expenses WHERE date = ?`,
//         [today],
//         (_, { rows }) => resolve(rows._array),
//         (_, error) => {
//           console.log('Error getting today\'s expenses', error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Delete All Expenses
// export const deleteAllExpenses = () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         `DELETE FROM expenses`,
//         [],
//         (_, result) => {
//           console.log('All expenses deleted successfully', result);
//           resolve(result);
//         },
//         (_, error) => {
//           console.log('Error deleting expenses', error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Delete Specific Expense
// export const deleteExpense = id => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         `DELETE FROM expenses WHERE expense_id = ?`,
//         [id],
//         (_, result) => {
//           console.log('Expense deleted successfully', result);
//           resolve(result);
//         },
//         (_, error) => {
//           console.log('Error deleting expense', error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Sum of Month's Expenses
// export const sumMonthExpenses = () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         `SELECT SUM(cost) as total FROM expenses WHERE month = ?`,
//         [new Date().getMonth() + 1],
//         (_, { rows }) => {
//           const total = rows.item(0)?.total || 0;
//           resolve(total);
//         },
//         (_, error) => {
//           console.log('Error summing expenses', error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Log All Expenses for Debugging
// export const logAllExpenses = () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         `SELECT * FROM expenses`,
//         [],
//         (_, { rows }) => {
//           console.log('All expenses:', rows._array);
//           resolve(rows._array);
//         },
//         (_, error) => {
//           console.log('Error getting expenses', error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Get Last Added Expense
// export const lastExpense = () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         `SELECT * FROM expenses ORDER BY expense_id DESC LIMIT 1`,
//         [],
//         (_, { rows }) => resolve(rows._array),
//         (_, error) => {
//           console.log('Error getting expenses', error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

import * as SQLite from 'expo-sqlite';
import dayjs from 'dayjs';

// Open the database
const db = SQLite.openDatabaseSync('expenses.db');

// Database Initialization
export const initDatabase = async () => {
  try {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS expenses (
        expense_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        cost REAL NOT NULL,
        description TEXT,
        date TEXT NOT NULL,
        month INTEGER NOT NULL,
        category TEXT
      );
    `);
    console.log('Expenses table created successfully');
    return true;
  } catch (error) {
    console.error('Error creating expenses table', error);
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
      lastWeekExpenses.push(result?.total ?? 0);
    }
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