import React, { useEffect } from 'react'
import { getProperties } from '../../services/apiProperties'

export const PropertiesList = () => {

  useEffect(() => {
    getProperties().then(data => console.log(data))
  }, [])

  return (
    <div>List</div>
  )
}
