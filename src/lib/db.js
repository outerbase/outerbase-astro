import { Outerbase, OuterbaseConnection } from '@outerbase/query-builder'

const connection = new OuterbaseConnection(
  'ib1tlx5sh28hjhmx2tsa4rhtia8pcdep4y9rvs5aefwq4jusjrfzrs5w13trjgdw' // Your API Key should replace this
)

export const db = Outerbase(connection)