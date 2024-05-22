import { Outerbase, OuterbaseConnection } from '@outerbase/sdk'

const connection: OuterbaseConnection = new OuterbaseConnection(
  'ib1tlx5sh28hjhmx2tsa4rhtia8pcdep4y9rvs5aefwq4jusjrfzrs5w13trjgdw', // Your API Key will replace this string
)
export const db = Outerbase(connection)
