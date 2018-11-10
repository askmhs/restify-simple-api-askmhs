/*
* @Author: Muhammad Harits Syaifulloh
* @Date:   2018-11-10 23:58:08
* @Last Modified by:   Muhammad Harits Syaifulloh
* @Last Modified time: 2018-11-11 00:00:56
*/

import {UserController} from "../../src/Controllers/UserController";
import should from "should";

describe("USER CONTROLLER TEST", () => {

    before(done => {
        require("./../DBConnection");
        done();
    });

    const dummyData = {
        name: "This is dummy user",
        phone: "+6281234567890"
    };

    let createdUser = "";

    describe("Create new user data", () => {
        before(done => {
            new UserController().store(dummyData).then(user => {
                createdUser = user;
                done();
            });
        });

        it('should return created user as a object', done => {
            should(createdUser).be.an.Object();
            done();
        });

        it('should created user have property _id', done => {
            should(createdUser).have.property("_id");
            done();
        });

        it('should created name was equal to dummyData.name', done => {
            should(createdUser.name).deepEqual(dummyData.name);
            done();
        });

        it('should created phone was equal to dummyData.phone', done => {
            should(createdUser.phone).deepEqual(dummyData.phone);
            done();
        });
    });

    describe("Update user data", () => {

        const newData = {
            "name": "This is updated name",
            "phone": "+62810987654321"
        };

        let updatedData = "";
        before(done => {
            new UserController().update(createdUser._id, newData).then(user => {
                updatedData = user;
                done();
            });
        });

        it('should updated phone was equal to newData.phone', done => {
            should(updatedData.phone).deepEqual(newData.phone);
            done();
        });

        it('should updated name was equal to newData.name', done => {
            should(updatedData.name).deepEqual(newData.name);
            done();
        });
    });

    describe("Get list user", () => {
        let listUser = {};
        before(done => {
            new UserController().list().then(users => {
                listUser = users;
                done();
            });
        });

        it('should listUser is an array of object', done => {
            should(listUser).be.an.Array();
            (new Map(listUser)).should.be.an.Object();
            done();
        });

        it('should contains _id, name, and phone inside each object', done => {
            listUser.map(user => {
                should(user).have.property("_id");
                should(user).have.property("name").which.is.a.String();
                should(user).have.property("phone").which.is.a.String();
            });
            done();
        });
    });

    describe("Get detail user", () => {
        let detailUser = "";
        before(done => {
            new UserController().detail(createdUser._id).then(user => {
                detailUser = user;
                done();
            });
        });

        it('should return user detail as a object', done => {
            should(detailUser).be.an.Object();
            done();
        });

        it('should have property _id', done => {
            should(detailUser).have.property("_id");
            done();
        });

        it('should have property name', done => {
            should(detailUser).have.property("name").which.is.a.String();
            done();
        });

        it('should have property phone', done => {
            should(detailUser).have.property("phone").which.is.a.String();
            done();
        });
    });

    describe("Remove user data", () => {
        let result = {};

        before(done => {
            new UserController().remove(createdUser._id).then(removed => {
                result = removed;
                done();
            });
        });

        it('should return "Successfully remove user data!" message as a string', done => {
            should(result).deepEqual("Successfully remove user data!").which.is.a.String();
            done();
        });
    });
});