const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { expect } = chai;
chai.use(chaiHttp);

const Student = require('../models/studentModel');
const studentController = require('../controller/studentController');

describe('Student Controller', () => {
    afterEach(() => {
        sinon.restore();  // restore all Sinon mocks after each test
    });

    describe('POST /api/students', () => {
        it('should add a student', async () => {
            const mockReq = {
                body: {
                    name: "John Doe",
                    parentName: "Jane Doe",
                    // ...add other properties here...
                },
            };

            const mockRes = {
                status: sinon.stub().returnsThis(),
                json: sinon.stub(),
            };

            sinon.stub(Student, 'create').resolves({ 
                _id: '123', 
                name: mockReq.body.name, 
                parentName: mockReq.body.parentName,
                // ...add other properties here...
            });

            await studentController.createStudent(mockReq, mockRes);

            sinon.assert.calledWith(mockRes.status, 201);
            sinon.assert.calledOnce(mockRes.json);
        });
    });

    describe('GET /api/v1/student', () => {
        it('should get all student data', async () => {
            const mockReq = {};
            const mockRes = {
                status: sinon.stub().returnsThis(),
                json: sinon.stub(),
            };

            const mockStudents = [
                {
                    _id: '123',
                    name: 'John Doe',
                    parentName: 'Jane Doe',
                    // ...add other properties here...
                },
                // ...add more students if desired...
            ];

            sinon.stub(Student, 'find').resolves(mockStudents);

            await studentController.getStudentData(mockReq, mockRes);

            sinon.assert.calledWith(mockRes.status, 200);
            sinon.assert.calledOnce(mockRes.json);
        });
    });
});
