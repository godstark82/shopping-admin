class UserModel {
  constructor (id, name, email, authProvider) {
    this.id = id
    this.name = name
    this.email = email
    this.authProvider = authProvider
  }

  // to Json
  toJson () {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      authProvider: this.authProvider
    }
  }

  // from Json
  fromJson (json) {
    this.id = json.id
    this.name = json.name
    this.email = json.email
    this.authProvider = json.authProvider
    return this
  }

  // copyWith
  copyWith ({ id, name, email, authProvider }) {
    return new UserModel(id, name, email, authProvider)
  }

  // from Firebase User
  fromFirebaseUser (user) {
    return new UserModel(user.uid, user.displayName, user.email, user.providerId)
  }
}
