import {Image} from 'next/image'

export default function Login() {
    return <>
        {/* <div className="flex justify-center app-auth-wrapper h-screen ali align-center g-0 row"> */}
        <div className="flex justify-center items-center m-0 app-auth-wrapper p-0 align-center">
            <div className="col-mdbg-white p-5 auth-main-col text-center bg col-12 col-lg-6">
                <div className="d-flex flex-column align-content-end">
                    <div className="mx-auto app-auth-body">
                      
                        <h2 className="mb-5 auth-heading text-center">Log in to Portal</h2>
                        <div className="auth-form-container text-start">
                            <form className="auth-form login-form">
                                <div className="mb-3 email">
                                    <label className="sr-only" htmlFor="signin-email">
                                        Email
                                    </label>
                                    <input
                                        id="signin-email"
                                        name="signin-email"
                                        type="email"
                                        className="form-control signin-email"
                                        placeholder="Email address"
                                        required="required"
                                    />
                                </div>
                                {/*//form-group*/}
                                <div className="mb-3 password">
                                    <label className="sr-only" htmlFor="signin-password">
                                        Password
                                    </label>
                                    <input
                                        id="signin-password"
                                        name="signin-password"
                                        type="password"
                                        className="form-control signin-password"
                                        placeholder="Password"
                                        required="required"
                                    />
                                    <div className="justify-content-between mt-3 extra row">
                                        <div className="col-6">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="RememberPassword"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="RememberPassword"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        {/*//col-6*/}
                                        <div className="col-6">
                                            <div className="text-end forgot-password">
                                                <a href="reset-password.html">Forgot password?</a>
                                            </div>
                                        </div>
                                        {/*//col-6*/}
                                    </div>
                                    {/*//extra*/}
                                </div>
                                {/*//form-group*/}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="mx-auto app-btn-primary w-100 btn theme-btn"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </form>
                            <div className="pt-5 auth-option text-center">
                                No Account? Sign up{" "}
                                <a className="text-link" href="/screens/auth/register">
                                    here
                                </a>
                                .
                            </div>
                        </div>
                        {/*//auth-form-container*/}
                    </div>
                    {/*//auth-body*/}
                    <footer className="app-auth-footer">
                        <div className="py-3 text-center container">
                            {/*/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) * /*/}
                            <small className="copyright">
                                Designed by <span>ReDevs</span>
                                <i className="fa-heart fas" />
                            </small>
                        </div>
                    </footer>
                    {/*//app-auth-footer*/}
                </div>
                {/*//flex-column*/}
            </div>
        </div>

        {/* </div> */}
        {/*//row*/}
    </>


}