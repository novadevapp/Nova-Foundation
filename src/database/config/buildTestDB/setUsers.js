const User = require('../../models/users');

// Create User documents for Testing 

const Sarah = {
  username: 'Sarah',
  babyName: 'Billy',
  email: 'sarah@gmail.com',
  displayName: "Billy's Mom",
  password: '$2y$10$B366u3Puy79ga1kJDT.HWOwY4M4tKexq94Jocivwwkbq6x/I1Y2Oi',
  //123456
}

const William = {
  username: 'William',
  babyName: 'Zara',
  email: 'william@gmail.com',
  displayName: "Zara's Dad",
  password: '$2y$10$h/Z.Go5aiJdcJYVfE0faQu5hcCDKvoq7aOv8/bla1Q4tyn7I3Lqfu',
  //123456
}

const Will = {
  username: 'Will',
  babyName: 'Joe',
  email: 'will@gmail.com',
  displayName: "Willie",
  password: '$2y$10$qFJQ09pqJJ9QscKjz60GMOA.xDVcJJlkMITpYdcs0Bbxv64SgWm3i',
  //will123
}

module.exports = () => User.create([Sarah, Will, William]);
