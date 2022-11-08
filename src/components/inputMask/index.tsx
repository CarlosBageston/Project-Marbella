import { InputHTMLAttributes } from 'react';
import { Mask } from './style';

const InputMask: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {

    const handleKeyUp = (e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 11;

        let value = e.currentTarget.value;
        value = value.replace(/\D/g, '');
        value = value.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
        e.currentTarget.value = value;
        return e;

    };

    return (
        <>
            <Mask onKeyUp={handleKeyUp} {...props} />
        </>
    );
};

export default InputMask;