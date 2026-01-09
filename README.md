# 📄 Validador e Gerador de CPF

[Valida e gera CPF](https://validaegeracpf.vercel.app)

Este projeto tem como objetivo **validar e gerar números de CPF (Cadastro de Pessoas Físicas)**, seguindo as regras oficiais da Receita Federal do Brasil.

A aplicação recebe o CPF informado pelo usuário, realiza a tratativa do formato (removendo pontos e traços quando necessário) e, em seguida, faz a verificação dos **dígitos verificadores**.

Além disso, o sistema permite a **geração de CPFs válidos** para fins de estudo e testes.

---

## 🚀 Funcionalidades

- ✅ Recebe CPF informado pelo usuário
- 🔄 Remove automaticamente pontos (`.`) e traços (`-`)
- 🔢 Valida o CPF com base no cálculo dos dígitos verificadores
- ❌ Identifica CPFs inválidos
- 🎲 Gera CPFs válidos aleatórios
- 📚 Código simples e fácil de entender

---

## 🧠 Como funciona a validação do CPF

- O CPF informado é tratado para conter apenas números
- CPFs com todos os dígitos iguais são invalidados
- O sistema calcula o primeiro dígito verificador
- Em seguida, calcula o segundo dígito verificador
- Os dígitos calculados são comparados com os informados
- Caso coincidam, o CPF é considerado válido

---

## 🛠️ Tecnologias utilizadas

- **Linguagem:** JavaScript

---

## Clone o repositório:

```bash

git clone https://github.com/adegilsontorres/validaegeracpf.git

```
