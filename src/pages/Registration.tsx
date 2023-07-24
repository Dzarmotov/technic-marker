import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../UI'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

type Input = {
    userName: string,
    pass: string
}
const Registration = () => {
    const [user, setUser] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<Input>()

    const onSubmitRegistration: SubmitHandler<Input> = async (data) => {
        try {

            const dataServer = {
                username: data.userName,
                pass: data.pass
            }

            const res = await axios.post(`https://c2f5c7e22c49b5a8.mokky.ru/users`, dataServer)
            setUser(res.data)
            localStorage.setItem('userName', data.userName)
            localStorage.setItem('password', data.pass)

            reset()

        } catch (err) {
            console.error(err);

        }
    }

    useEffect(() => {
        if (user) {
            return navigate('/', { replace: true })
        }
    }, [user])

    return (
        <form onSubmit={handleSubmit(onSubmitRegistration)}>


            <input
                {...register('userName', {
                    required: 'Поле обязательно к заполонению',
                    minLength: {
                        value: 6,
                        message: "Минимум 6 символов"
                    }

                })}
                placeholder='ФИО'
            />
            <div style={{ height: 25, color: "red" }}>
                {errors?.userName && <p>{errors?.userName.message || 'Error!'}</p>}
            </div>
            <input
                {...register('pass', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                        value: 8,
                        message: "Минимум 8 символов"
                    }
                })}
                placeholder='Пароль'
            />
            <div style={{ height: 25, color: "red" }}>
                {errors?.pass && <p>{errors?.pass.message || 'Error!'}</p>}
            </div>

            <input type='submit' />

        </form>
    )
}

export default Registration