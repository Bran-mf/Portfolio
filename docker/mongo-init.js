db.createUser({
  user: 'restaurantsUser',
  pwd: 'AnyPassWouldWord59!',
  roles: [
    {
      role: 'readWrite',
      db: 'restaurants',
    },
  ],
});
