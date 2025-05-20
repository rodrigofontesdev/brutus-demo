/* eslint-disable camelcase */
import { User } from '@models/User'
import { api } from './axios'

export type UpdateSubscriberParams = {
  subscriberId: string
}

export type DeleteSubscriberParams = {
  subscriberId: string
}

export type UpdateSubscriberBody = Partial<{
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

  static async delete(params: DeleteSubscriberParams) {
    const { subscriberId } = params

    return await api.delete(`/subscribers/${subscriberId}`)
  }
}
