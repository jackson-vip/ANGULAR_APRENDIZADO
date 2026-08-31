import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class PessoaFormController {
    pessoaForm!: FormGroup;

    constructor(
        private readonly _fb: FormBuilder
    ) {
        this.pessoaForm = this._fb.group({
            nome: ['', [Validators.required, Validators.minLength(3)]],
            email: this._fb.control('', {
                validators: [Validators.required, Validators.email],
            }),
            endereco: this._fb.group({
                rua: ['', [Validators.required]],
                numero: ['', [Validators.required]],
            }),
            musicas: this._fb.array([
                ['', [Validators.required]],
                this._fb.control('', [Validators.required]),
            ]),
        });
    }
}
