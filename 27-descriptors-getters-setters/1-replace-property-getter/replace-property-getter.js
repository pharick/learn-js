function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties(this, {

    firstName: {

      get: function() {
        return this.fullName.split(" ")[0];
      },

      set: function(value) {
        var fullName = this.fullName.split(" ");
        fullName[0] = value;
        this.fullName = fullName.join(" ");
      }

    },

    lastName: {

      get: function() {
        return this.fullName.split(" ")[1];
      },

      set: function(value) {
        var fullName = this.fullName.split(" ");
        fullName[1] = value;
        this.fullName = fullName.join(" ");
      }

    }

  });
}

var vasya = new User("Василий Попкин");
console.log( vasya.firstName );
console.log( vasya.lastName );

vasya.lastName = 'Сидоров';
console.log( vasya.fullName );
vasya.firstName = 'Петя';
console.log( vasya.fullName );
