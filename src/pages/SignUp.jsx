import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { Helmet } from 'react-helmet';

export default function Register() {
    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <SignUpForm />
        </div>
    );
}
