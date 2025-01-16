'use client'
import React,{useState} from "react";
import styles from './MessageForm.module.css'

export interface MessageFormProps{
}
export const MessageForm: React.FC<MessageFormProps> = (props) => {
    const {} = {...props}
    const [formState, setFormState] = useState({
        firstName:'',
        email:'',
        phone:'',
        typeCommunication:'',
        messageText:'',
    })
    const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setFormState({...formState, [name]:value})
    }
    const onChangeTextArea = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name,value} = e.target
        setFormState({...formState, [name]:value})
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert(Object.values(formState))
        setFormState({
            firstName:'',
            email:'',
            phone:'',
            typeCommunication:'',
            messageText:'',
        })
    }
    return (
        <div className={styles.mainDiv}>
            <p className={styles.information}>
                <label className={styles.mainLabel}>Contact Us </label>
                Get in touch with us! Whether you have
                a questions, feedback, or just want to say hello,
                we`re here for you
            </p>
            <form onSubmit={onSubmit} className={styles.messageForm}>
                    Send us a Messsage
                    <input className={styles.inputs} type='text' placeholder="Name" onChange={onChange} value={formState.firstName} name='firstName'/>
                    <input className={styles.inputs} type='email' placeholder="Email" onChange={onChange} value={formState.email} name='email'/>
                    <input className={styles.inputs} type='tel' placeholder="Phone" onChange={onChange} value={formState.phone} name='phone'/>
                    <label className={styles.contactMethodLabel}>Preferred contact method of communication</label>
                    <div className={styles.radioButtons}>
                        <input type="radio" id='Email' name='typeCommunication' title="email" onChange={onChange} value='email'/>
                        <label className={styles.radioLabel}>Email</label>
                        <input type="radio" id='Phone' name='typeCommunication' title="phone" onChange={onChange} value='phone'/>
                        <label className={styles.radioLabel}>Phone</label>
                    </div>
                    <textarea className={styles.inputMessage} placeholder='Message' rows={7} onChange={onChangeTextArea} value={formState.messageText} name='messageText'/>
                    <input className={styles.inputSubmit} type='submit'/>
            </form>
        </div>
    );
  }