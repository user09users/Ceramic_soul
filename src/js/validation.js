import JustValidate from 'just-validate';
const validations = () => {
    try {
        const validatorTouch = new JustValidate(".touch__form");

        validatorTouch
            .addField("#name", [
                {
                    rule: "required",
                    errorMessage: "Please fill the name",
                },
                {
                    rule: "minLength",
                    value: 2,
                    errorMessage: "Minimum 2 chars!",
                },
            ])
            .addField("#email", [
                {
                    rule: "required",
                },
                {
                    rule: "email",
                },
            ])
            .addField(
                "#question",
                [
                    {
                        rule: "required",
                    },
                    {
                        rule: "minLength",
                        value: 5,
                    },
                ],
                {
                    errorsContainer: document
                        .querySelector("#question")
                        .parentElement.querySelector(".error-message"),
                }
            )
            .addField(
                "#checkbox",
                [
                    {
                        rule: "required",
                    },
                ],
                {
                    errorsContainer: document
                        .querySelector("#checkbox")
                        .parentElement.parentElement.querySelector(".checkbox-error-message"),
                }
            )
            .onSuccess((event) => {
                const form = event.currentTarget;
                const formData = new FormData(form);

                fetch("https://httpbin.org/post", {
                    method: "POST",
                    body: formData,
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("Success", data);
                        form.reset();
                    });
            });
    } catch (e) { }

    try {
        const validatorFooter = new JustValidate(".footer__form");

        validatorFooter
            .addField(
                "#footer__email",
                [
                    {
                        rule: "required",
                    },
                    {
                        rule: "email",
                    },
                ],
                {
                    errorsContainer: document
                        .querySelector("#footer__email")
                        .parentElement.querySelector(".email-error-message"),
                }
            )
            .addField(
                "#footer__checkbox",
                [
                    {
                        rule: "required",
                    },
                ],
                {
                    errorsContainer: document
                        .querySelector("#footer__checkbox")
                        .parentElement.parentElement.querySelector(".check-error-message"),
                }
            )
            .onSuccess((event) => {
                const form = event.currentTarget;
                const formData = new FormData(form);

                fetch("https://httpbin.org/post", {
                    method: "POST",
                    body: formData,
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("Success", data);
                        form.reset();
                    });
            });
    } catch (e) { }
}

export default validations;