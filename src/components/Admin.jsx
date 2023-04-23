import React from 'react'
import { Navigate } from 'react-router-dom'

function Admin(props) {
      const isAuth = props.isAuth
      if (!isAuth) {
            return <Navigate to={'/'} />
      }
      return (
            <section>
                  <h1>Admin</h1>
            </section>
      )
}

export default Admin
