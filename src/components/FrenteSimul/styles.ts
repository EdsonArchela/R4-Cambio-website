import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .h1class {
    font-size: 1.3rem;
    color: #055556;
  }
`

export const RemiType = styled.div`
  height: 100%;
  margin: 1rem;
`

export const Recipient = styled.div`
  height: 100%;
`

export const Simulator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 500px !important;
`

export const Currency = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 200px;
  box-sizing: border-box;
  & > * {
    flex: 1;
  }

  .flag {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #055556;
    color: white;
    max-height: 53px;
    box-sizing: border-box;
    img {
      width: 25px !important;
      margin-right: 1rem;
    }

    select {
      border: none;
      outline: none;
      background-color: transparent;
      color: white;
    }

    option {
      color: black;
    }
  }

  .value {
    padding: 1rem 2rem;
    border: 1px solid #ccc;
    border-left: none;
    border-right: none;

    input {
      outline: none;
      border: none;
    }
  }
`

export const Costs = styled.div`
  height: 100%;
  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .info {
    background-color: #2e7e80;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    margin-right: 1rem;
  }
`
