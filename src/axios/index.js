import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of team members from API
const initialTeamList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Steve Jobs',
    email: 'steve@apple.com',
    role: 'Team Lead',
  },
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Michael Miller',
    email: 'michael@gmail.com',
    role: 'Student',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamList })
  },
  post(url, { name, email, role }) {
    const newTeamMember = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeamMember })
  }
}
