const objProps = {
  get canViewLog() {
    // Код, который не хотелось бы вызывать каждый раз
    // ....
    return true;
  },
  get canEditUsers() {
    // Код, который не хотелось бы вызывать каждый раз
    // ...
    return  true
  }
}


const { canEditUsers } = objProps;
