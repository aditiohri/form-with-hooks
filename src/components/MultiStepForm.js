import React from 'react';
import { useForm } from "react-hook-form";

const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
}

const card = {
    border: '2px dotted pink',
    alignSelf: 'center',
}

export default function MultiStepForm() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div style={container}>
            <div style={card}>
                <p>A Form For Fun</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p><label>Name</label></p>
                    <input name="firstName" ref={register} />
                    <p><label>Gender</label></p>
                    <input type="radio" name="gender" id="genderChoice1" value="female" ref={register}/><label for="genderChoice1">female</label><br />
                    <input type="radio" name="gender" id="genderChoice2" value="lemur" ref={register}/><label for="genderChoice2">lemur</label><br />
                    <input type="radio" name="gender" id="genderChoice3" value="spider" ref={register}/><label for="genderChoice3">spider</label><br />
                    <input type="radio" name="gender" id="genderChoice4" value="lemur" ref={register}/><label for="genderChoice4">cat</label><br />
                    <input type="radio" name="gender" id="genderChoice5" value="coffee cake" ref={register}/><label for="genderChoice5">coffee cake</label><br />
                    <input type="radio" name="gender" ref={register}/><input type="text" name="gender" placeholder="other" ref={register}/>
                    <p><button type="submit">submit</button></p>
                </form>
            </div>
        </div>
    )
}
