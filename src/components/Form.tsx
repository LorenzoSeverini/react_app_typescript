import React, { FormEvent, useRef, useState } from "react";

// npm i react-hook-form 
import { FieldValues, useForm } from "react-hook-form";
// npm i zod@3.20.6 documentation here --> https://zod.dev/
import { z } from 'zod';
// npm i @hookform/resolvers@2.9.11
import { zodResolver } from '@hookform/resolvers/zod';

// schema absed validation using zod
const schema = 
    z.object({name: z.string()
        .min(3, { message: 'Name must be at least 3 characthers'}) // custom message
        .max(25, { message: 'Name must be max 25 characthers'}), // custom message
    age: z.number({ invalid_type_error: 'Age field is required' }) // custom message
        .max(100, {message: 'Max age accept is 110'}) // custom message
        .min(18, { message: 'Age must be at least 18'}), // custom message     
});

type FormData = z.infer<typeof schema>;

// interface FormData {
//     name: string;
//     age: number;
// }

const Form = () => {

    // ------------------------
    // one way is use this method for the form ( ref way more perfomance )
    // ------------------------
    // const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null);
    // const person = { name: '', age: 0 };

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault();
    //     if (nameRef.current !== null)
    //         person.name = (nameRef.current.value);
    //     if (ageRef.current !== null)
    //         person.age = parseInt(ageRef.current.value);
    //     console.log(person);
    // }

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <div className="mb-3">
    //             <label htmlFor="name" className="form-label">Name</label>
    //             <input ref={nameRef} id="name" type="text" className="form-control" />
    //         </div>

    //         <div className="mb-3">
    //             <label htmlFor="age" className="form-label">Age</label>
    //             <input ref={ageRef} id="age" type="number" className="form-control" />
    //         </div>

    //         <button type="submit" className="btn btn-dark">Submit</button>
    //     </form>
    // );

    // ---------------------
    // Other way
    // ---------------------
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isValid },
    } = useForm<FormData>({ resolver: zodResolver(schema) });
     
    const onSubmit = (data: FieldValues) => console.log(data);
    
    // const [person, setPerson] = useState({
    //     name: '',
    //     age: '',
    // });

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault();
    //     console.log(person);
        
    // };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    // onChange={(event) =>
                    //     setPerson({ ...person, name: event.target.value })
                    // }
                    // value={person.name}
                    // { ...register('name', { required: true, minLength: 3, maxLength: 25 }) }
                    { ...register('name')}
                    id="name"
                    type="text"
                    className="form-control"
                />
                {errors.name && (
                    <p className="text-danger mt-2">{errors.name.message}</p>
                )}
                {/* errors.name?.type ? before the type is to prevent the error when the input field is empty */}
                {/* { errors.name?.type === 'required' && <p className="text-danger mt-2">The name field is required.</p>} */}
                {/* { errors.name?.type === 'minLength' && <p className="text-danger mt-2">The name must be at least 3 charachters</p>}
                { errors.name?.type === 'maxLength' && <p className="text-danger mt-2">The name must be max 25 charachters</p>} */}
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    // onChange={(event) =>
                    //     setPerson({ ...person, age: parseInt(event.target.value) })
                    // }
                    // value={person.age}
                    { ...register('age', { valueAsNumber: true }) }
                    id="age"
                    type="number"
                    className="form-control"
                />
                {errors.age && (
                    <p className="text-danger mt-2">{errors.age.message}</p>
                )}
            </div>

            <button disabled={!isValid} type="submit" className="btn btn-dark">
                Submit
            </button>
        </form>
    );
};

export default Form;
