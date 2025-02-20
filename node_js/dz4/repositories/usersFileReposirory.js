const fs = require('fs');

class UsersFileRepository {
    constructor(filePath) {
        this._filePath = filePath;
        this._data = [];
        this._uniqueID = 0;
        this._load();
    }

    _load() {
        fs.readFile(this._filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                this._save();
                this._data = [];
                this._uniqueID = 0;
                return;
            }
            this._data = JSON.parse(data);
            this._uniqueID = this._data.reduce((maxID, user) => user.id > maxID ? user.id : maxID, 0);
        });
    }

    _save() {
        fs.writeFile(this._filePath, JSON.stringify(this._data, null, 2), err => {
            if (err) {
                console.error(err);
            }
        });
    }

    getAllUsers() {
        return this._data;
    }

    getUserByID(id) {
        return this._data.find((user) => user.id === id);
    }

    addUser(userData) {
        const newUserID = ++this._uniqueID
        this._data.push({
            id: newUserID,
            ...userData
        });

        this._save();

        return newUserID;
    }

    updateUser(id, updateUserData) {
        const user = this.getUserByID(id);
        if (user)
            for (const key in updateUserData)
                user[key] = updateUserData[key];
        this._save();
        return user;
    }

    deleteUser(id) {
        const user = this.getUserByID(id);
        if (user) {
            const userIndex = this._data.indexOf(user);
            this._data.splice(userIndex, 1);
        }
        this._save();
        return user;
    }
}


module.exports = UsersFileRepository;