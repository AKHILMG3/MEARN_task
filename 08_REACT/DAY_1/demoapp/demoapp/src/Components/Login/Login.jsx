import React from 'react'

function Login() {
  return (
    <center><br /><br />
      <div><form  class="border-2 border-dark w-25 bg-light shadow-lg "> 
    <fieldset disabled>
      <legend class="p-3 m-2">Disabled fieldset example</legend>
      <div class="mb-3 ">
        <label for="disabledTextInput" class="form-label">Disabled input</label>
        <input type="text" id="disabledTextInput" class="form-control w-75" placeholder="Disabled input"/>
      </div>
      <div class="mb-3">
        <label for="disabledSelect" class="form-label">Disabled select menu</label>
        <select id="disabledSelect" class="form-select w-75">
          <option>Disabled select</option>
        </select>
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input class="form-check-input " type="checkbox" id="disabledFieldsetCheck" disabled/>
          <label class="form-check-label" for="disabledFieldsetCheck">
            Can't check this
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button> <br /><br />
    </fieldset>
  </form></div><br /><br />
    </center>
  )
}

export default Login