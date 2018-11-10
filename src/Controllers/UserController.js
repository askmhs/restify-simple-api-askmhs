import User from "./../Models.User.model";
import { NotFoundException } from "./../Exceptions/NotFoundException";

export class UserController {
	
	async list() {
		return User.find().then(users => {
			return users;
		}).catch(error => {
			throw error;
		});
	}

	async detail(id) {
		return User.findById(id).then(user => {
			if (user !== null) {
				return user;
			}

			throw new Error("Couldn't find user data!");
		}).catch(error => {
			throw user;
		});
	}

	async store(data) {
		return User.create(data).then(created => {
			return created;
		}).catch(error => {
			throw error;
		});
	}

	async update(id, data) {
		return User.findByIdAndUpdate($id, {
			$set: data
		}, {
			new: true // This would return update data
		}).then(updated => {
			if (updated !== null) {
				return updated;
			}

			throw new NotFoundException("The data you're looking for couldn't be found!");
		}).catch(error => {
			throw error;
		});
	}

	async remove(id) {
		return User.findByIdAndRemove(id).then(removed => {
			if (removed !== null) {
				return "Successfully remove user data!";
			}

			throw new NotFoundException("The data you're looking for couldn't be found!");
		}).catch(error => {
			throw error;
		});
	}
}