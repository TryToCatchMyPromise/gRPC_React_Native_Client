import {ServiceError} from 'grpc'
import {User, UserRequest} from '../api/users_pb'
import {client} from './utils'

export default function useGetUser(id: number) {
  return new Promise<User>((resolve, reject) => {
    const request = new UserRequest()
    request.setId(id)

    client.getUser(request, (err: ServiceError | null, user: User) => {
      if (err) reject(err)
      else resolve(user)
    })
  })
}
