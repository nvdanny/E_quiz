// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test');

// Create a new document in the collection.
db.getCollection('users').insertOne({
    username: 'admin',
    password: 'admin', // Cập nhật mật khẩu thành 'admin'
    email: 'admin@gmail.com', // Cập nhật email thành 'admin@gmail.com'
    phoneNumber: '0941411858',
    birthday: '1999-01-01',
    university: 'Hanoi University of Science and Technology',
    major: 'Computer Science',
    year: 4,
    studentId: 'B19DCCN001',
    linkFb: 'https://facebook.com/admin',
    role: 'admin'
});

