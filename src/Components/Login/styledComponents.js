import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  height: 100vh;
  width: 100%;
  background-color: #152850;
`
export const LoginCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80vh;
  background-olor: #e0eefe;
  border-radius: 30px;
`
export const LoginImage = styled.img`
  width: 50%;
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  background-color: #ffffff;
  height: 100%;
  border-radius: 30px;
  padding: 20px;
`
export const LoginHeading = styled.h1``

export const InputLabel = styled.label``

export const Input = styled.input``

export const LoginButton = styled.button`
  width: 90%;
  height: 40px;
  background-color: #1565d8;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #ff0b37;
  align-self: center;
`
