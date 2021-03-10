import React from 'react';
import {TFormData} from './types';
import {CreateDocFormView} from './CreateDocFormView';

type TProps = {
    onSubmit: (data : TFormData) => void;
}

export const CreateDocView = (props : TProps) => {
    const {onSubmit} = props;
    return (
        <div>
            <CreateDocFormView onSubmit={onSubmit}/>
        </div>
    )
};