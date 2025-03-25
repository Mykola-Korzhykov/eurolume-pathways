import Swal from "sweetalert2";
import sendMessage from "./sendMessage";

const estimate = async () => {
    if (localStorage.getItem('isApplicationSent')) {
        Swal.fire("Application is submitted already.")
    } else {
        const { value } = await Swal.fire({
            title: "Application submission",
            html: `
                  <input type="text" id="name-input" placeholder="Name" class="swal2-input">
                  <input type="phone" id="phone-input" placeholder="Phone" class="swal2-input">
                  <input type="email" id="email-input" placeholder="E-Mail" class="swal2-input">
                `,
            focusConfirm: false,
            confirmButtonText: 'Free Estimate',
            preConfirm: () => {
                const name = document.getElementById("name-input") as HTMLInputElement;
                const phone = document.getElementById("phone-input") as HTMLInputElement;
                const email = document.getElementById("email-input") as HTMLInputElement;

                if (!name.value) {
                    Swal.showValidationMessage(`Please enter name`)
                }

                if (!phone.value) {
                    Swal.showValidationMessage(`Please enter phone`)
                }

                if (!email.value) {
                    Swal.showValidationMessage(`Please enter email`)
                }

                if (name.value && phone.value && email.value) {
                    sendMessage(`Name: ${name.value}\nPhone: ${phone.value}\nE-Mail: ${email.value}`)
                    localStorage.setItem('isApplicationSent', 'true')
                } else {
                    return false;
                }

                return [
                    (document.getElementById("name-input") as HTMLInputElement)
                        .value,
                    (document.getElementById("phone-input") as HTMLInputElement)
                        .value,
                    (document.getElementById("email-input") as HTMLInputElement)
                        .value
                ];
            },
        });
    }
}

export { estimate }