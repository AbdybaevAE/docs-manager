import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Upload
} from "antd"
import {useForm, Controller} from "react-hook-form";
import React from "react"
import {TFormProps} from "./types";

const {Option} = Select;
export const CreateDocFormView = (props : TFormProps) => {
    const {onSubmit} = props;
    const {register, handleSubmit} = useForm();
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    ref={register({required: true})}
                    type="text"
                    name="docNumber"
                    placeholder="Введите номер документа"/>
                <br/>
                <input
                    ref={register({required: true})}
                    type="text"
                    name="docClass"
                    placeholder="Введите класс документа"/>
                <br/>
                <select ref={register} name="docType">
                    <option value="first">Первый тип</option>
                    <option value="second">Второй тип</option>
                </select>
                <br/>
                <input
                    ref={register({required: true})}
                    type="text"
                    name="docOrg"
                    placeholder="Введите организацию"/>
                <br/>
                <input
                    ref={register({required: true})}
                    type="file"
                    name="docContent"
                    placeholder="Выберите документ"/>
                <br/>

                <input
                    ref={register()}
                    type="text"
                    name="key_1"
                    placeholder="Ключ"/>
                <input
                    ref={register()}
                    type="text"
                    name="val_1"
                    placeholder="Значение"/>
                    <br/>
                <input
                    ref={register()}
                    type="text"
                    name="key_2"
                    placeholder="Ключ"/>
                    
                <input
                    ref={register()}
                    type="text"
                    name="val_2"
                    placeholder="Значение"/>
                    <br/>
                <input
                    ref={register()}
                    type="text"
                    name="key_3"
                    placeholder="Ключ"/>
                <input
                    ref={register()}
                    type="text"
                    name="val_3"
                    placeholder="Значение"/>
                <br/>

                <input value="Сохранить" type="submit"/>
            </form>

        </div>
    )

}