import React, { Component } from 'react'
import "../styles/contact.css";
class ContactComponent extends Component {
    render() {
        return (
            <div className="contact-container">
              <h1 className="text-center contact-header">Magic Members</h1>
              <div className="contact-info-container">
                <div className="p-2 text-center contact-info">
                    <h2>
                        Ganesan J
                    </h2>
                    <h4>
                        Master Mind
                    </h4>
                    <div> 
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDw8QDw8PDQ4PEA0PDRAPGBEOEg0PFhEWFxURFRMYHSkgGBolGx8TITEhMSkrLzouFx83RD8uNygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOkA2AMBIgACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAAABQQBAgMGB//EADUQAAICAAQDBQYEBwEAAAAAAAABAgMEERIhBTFREyJBYXEGIzKRobEzUmLRFEJygYLB4RX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/cQAAAAAAAAAAAAAGe7Fwjtnm+iMs+IS8El67gUgSHjLPzfJI4/irPzv6fsBYBIWMs/N9EesOIS8Un6bAUgZ6cXCW2eT6M0AAAAAAAAAAAAAAAAAAAAAAAAAcN5c+RMxWMcto7R6+LO/EL83oXJfF5voYgAAAAAAAABqwuMcdpbx+qMoAuxlnuuTOSbw+/J6HyfLyfQpAAAAAAAAAAAAAAAAAAAAOl1mmLfRfU7mLic+6l1f2AnN/wDQAAAAAAAAAAAABFqizVFPqt/UilHhk+610efzA2gAAAAAAAAAAAAAAAAAATeJvvRX6c/mykS+JfGv6V92BlAAAAAAAAAAAAADXwx95r9P2ZkNXDfj/wAX90BUAAAAAAAAAAAAAAAAAAAm8TXei/05fJlIxcTjtF9Hl8wJwAAAAAAAAAAAAAa+GLvP+n/aMhQ4ZHaT6tIDcAAAAAAAAAAAAAAAAAABL4jN68vBJbf7KhK4gvePzSAzAAAAAAAAAAAAABq4fNqaWezT2+plNHD17xeSf2ArAAAAAAAAAAAAAAAAAAATuKR3i/Joonji6tUWlz5r1Ajg5lFrmmvU4AAAAAAAAAAAAbOGR70n0WX1zMkYt8k36FbCU6IpPm92B7gAAAAAAAAAAAAAAAAAAAAMfE4d1Po/uTS3bDVFrqiLKLTafNbMDgAAAAAAAAA5jFtpLm9kBQ4ZHut9Xt6I2nSmvTFLojuAAAAAAAAAAAAAAAAAAAAAACRj/wASX+P2RXJGP/El/j9kB4AAAAAAAAHvgfxI/wB/szwPfBfiR/v9mBXAAAAAAAAAAAAAAAAAAAAAAAAI+MfvJeq+xYIl7znJ/qf3A6AAAAAAAAHrhH7yHr/o8jtS8pRfSS+4FwAAAAAAAAAAAAAAAAAAAAAB0stjHm0jDdj/AAgsvN/sBtvs0xb6IinMpNvNtt+ZwAAAAAAAAAAAFqizVFPy3PQhRk1um16bGyjH+E1n5r9gKIOldsZcmmdwAAAAAAAAAMuIxijsu9Lp09TDbipy8cl0WwFWdkVzaXqeMsbWvHP0zJQAoy4ivCLf0M9uOlLl3V5c/mZgAbAAAAAAAAAAAAAAAAAABM01Y6UefeXns/mZgBQjxFeMWvTc9Y42t+OXqSgBbhZF8mn6bncgntVipx8c10e4FgGXD4xS2fdl9GAJbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgvaV0Q0rogIIL2ldENK6ICCC9pXRHVpdEBDBVwuKrsdijzqslVPNJd5JN5eW6OMTjaas+0lGGVdlrz8K4Za5f2zQEsFuMotJrJ5rNenU6X311wlObjGEIynOT/lilm2BHBcTi+WW6zXoeEMVW7ZVL44Qrslyy0ycksn17rAlAuPLovoO7+ny5AQwXUl0Rmsx1EbYUynBXTjKcK/5nCPOWXgvMCWDQvaHB6HNWZxTUclC1ylnFyUow06pRcVKWpJrKLeeSO8uO4NOS7WHcg5yllLRpUFN5WZaZNRalpTzyeYGQGtcbwzUMnZJ2SlCMY03ynGUWtSnWoaq8s45uSXNdQ+O4Rdp7z8NpNKFjc3r0e7Sj73vd3u577AZAbIcZw0nBRlKfaQ7RONdsoRjm1nZNR017qS7zW6Z7cO4jRiFJ0yU9OnUnGUGk1nGWUkm4tbqXJ+AE0F7SuiGldEBBBe0rohpXRAQTku6V0QA5AAAAACV7R8PliKOzhGuc1KMoq1uMFJcpPKMtWXPS1k/LmVTqB8pjPZWybsnF0K2yeIlKeTi5xlVWoQlkuWuCeW+XmeeJ9lbbu1lbDCOd9fEYSl3p9j26hocG4Zy0tP8AL8WfkfYBAfIWey1kpzlpog50yjHRZYo4aTpdfZRgoJShm289ufJvc9cb7La+2hXXhq6rcHZhs2nJubhlHuaO5FSzlmnv0z3PqehygPj8V7LXWOai8Ph9eclbU5uyldgq/wCFitMc6s85Z5rnyz3NNPs/ar671DDUdn2S/hqnKVMknZqfwLvLUpRenmsvHM+nCA+b4nwK66d8sqE76I1qyTnKeFkoSThX3VqhJvd5xfPnmssb9kpzk5TjhoJxu0Uw1Srw8p2UPKt6Vs1CebyW8z69/uF+4Evh3CFXU6pPKCxNt9SqlKtQg73ZCG2Wy2Tjy5rkOI4e+WIosqrolCvX2krLJ1zeqLjkoquSaWefNc36lUf8A+W/87iDrszrwfbXTj2043WrOlRa7Ov3Hu0lkl8Wzk+ZzifZd2do4uGH1UONdUZTsqhfOtQsnk0ttK0JpJ5NvZs+oAHycPZ3EKKUVRVN22zjZC29ywcZuttQlpXb5uLb1aVulyR6Yn2Xk+1lBxfvK3TTOdirVKtVk69aTdblPJ5pPLTE+oDA+SXsxc4VVN1VpVyhbdVO3X2bla/4dV5aZxSnlrbz2byzZW4Jw66uyy291a5U4XDqNOpx0U9o1NuST1Sc5beCS3ZXYA5AAAAAAAB//9k=">
                        </img>
                    </div>
                    <div className="mt-2" >
                        <a href="mailto:ganesh@gmail.com" className="text-black"  style={{ textDecoration: "none" }}> <i className="fas fa-envelope mr-3"/>ganesh@gmail.com</a>
                    </div>
                    

                </div>
                <div className="p-2 text-center contact-info">
                    <h2>
                        Nithish Raja KL
                    </h2>
                    <h4>
                        Advocate
                    </h4>
                    <div> 
                        <img src="data:image/jpeg;base64,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">
                        </img>
                    </div>
                    <div className="mt-2" >
                        <a href="mailto:nithishraja@gmail.com" className="text-black"  style={{ textDecoration: "none" }}> <i className="fas fa-envelope mr-3"/>nithishraja@gmail.com</a>
                    </div>
                </div>
                <div class="p-2 text-center contact-info">
                    <h2>
                        Teja Shree D
                    </h2>
                    <h4>
                        Communicator
                    </h4>
                    <div> 
                        <img src="data:image/jpeg;base64,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">
                        </img>
                    </div>
                    <div className="mt-2" >
                        <a href="mailto:tejasree@gmail.com" className="text-black"  style={{ textDecoration: "none" }}> <i className="fas fa-envelope mr-3"/>tejasree@gmail.com</a>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}
export default ContactComponent;