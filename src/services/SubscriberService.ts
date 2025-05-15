/* eslint-disable camelcase */
import { User } from '@models/User'
import { api } from './axios'

type UpdateSubscriberParams = {
  subscriberId: string
}

type UpdateSubscriberBody = Partial<{
  email: string
  fullName: string
  mobilePhone: string
  city: string
  state: string
  secretWord: string
}>

export class SubscriberService {
  static async update(params: UpdateSubscriberParams, body: UpdateSubscriberBody) {
    const { subscriberId } = params
    const { email, fullName, mobilePhone, city, state, secretWord } = body

    return await api.patch<User>(`/subscribers/${subscriberId}`, {
      email,
      city,
      state,
      full_name: fullName,
      mobile_phone: mobilePhone,
      secret_word: secretWord,
    })
  }
}
