export default {
    name: 'Home',
    metaInfo: {
        title: 'Home',
        htmlAttrs: {
            lang: 'en',
        },
        bodyAttrs: {
            class: 'home'
        }
    },
    data () {
        return {
            form: {
                firstName: null,
                lastName: null,
                email: null,
                recipient: {
                    label: 'Who is this policy for?',
                    picked: null,
                    option1: 'Just myself',
                    option2: 'Me and My Partner'
                }
            },
            errors: [],
            hasSubmitted: false
        }
    },
    methods: {
        validateFields() {
            
            if (!this.hasSubmitted) {
                return;
            }

            this.errors = [];

            if (!this.form.firstName) {
                this.errors.push('firstName');
            }
            
            if (!this.form.lastName) {
                this.errors.push('lastName');
            }
            
            if (!this.form.email) {
                this.errors.push('email');
            }
            
            if (!this.form.recipient.picked) {
                this.errors.push('picked');
            }

        },
        onSubmit() {

            this.hasSubmitted = true;
            
            this.validateFields();

            if (this.form.firstName && this.form.lastName && this.form.email && this.form.recipient.picked) {
                console.log('FORM OBJECT: ', this.form);

                this.$modal.show('modal--submit');                
            }
        }
    }
}