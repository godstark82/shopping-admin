import Footer from "@/pages/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
    return <>
        <div className="app-wrapper">
            <div className="app-content p-lg-4 p-md-3 pt-3">
                <div className="container-xl">
                    <h1 className="app-page-title">My Account</h1>
                    <div className="gy-4 row">
                        <div className="col-12 col-lg-6">
                            <div className="d-flex flex-column align-items-start shadow-sm app-card app-card-account">
                                <div className="app-card-header p-3 border-bottom-0">
                                    <div className="align-items-center gx-3 row">
                                        <div className="col-auto">
                                            <div className="app-icon-holder">
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-person"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                                                    />
                                                </svg>
                                            </div>
                                            {/*//icon-holder*/}
                                        </div>
                                        {/*//col*/}
                                        <div className="col-auto">
                                            <h4 className="app-card-title">Profile</h4>
                                        </div>
                                        {/*//col*/}
                                    </div>
                                    {/*//row*/}
                                </div>
                                {/*//app-card-header*/}
                                <div className="px-4 app-card-body w-100">
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label mb-2">
                                                    <strong>Photo</strong>
                                                </div>
                                                <div className="item-data">
                                                    <Image
                                                        className="profile-image"
                                                        src="assets/images/user.png"
                                                        alt=""
                                                        width={100}
                                                        height={100}
                                                    />
                                                </div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Change
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <strong>Name</strong>
                                                </div>
                                                <div className="item-data">James Doe</div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Change
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <strong>Email</strong>
                                                </div>
                                                <div className="item-data">james.doe@website.com</div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Change
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <strong>Website</strong>
                                                </div>
                                                <div className="item-data">https://johndoewebsite.com</div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Change
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <strong>Location</strong>
                                                </div>
                                                <div className="item-data">New York</div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Change
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                </div>
                                {/*//app-card-body*/}
                                <div className="mt-auto app-card-footer p-4">
                                    <Link className="app-btn-secondary btn" href="#">
                                        Manage Profile
                                    </Link>
                                </div>
                                {/*//app-card-footer*/}
                            </div>
                            {/*//app-card*/}
                        </div>
                        {/*//col*/}
                        <div className="col-12 col-lg-6">
                            <div className="d-flex flex-column align-items-start shadow-sm app-card app-card-account">
                                <div className="app-card-header p-3 border-bottom-0">
                                    <div className="align-items-center gx-3 row">
                                        <div className="col-auto">
                                            <div className="app-icon-holder">
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-sliders"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                                                    />
                                                </svg>
                                            </div>
                                            {/*//icon-holder*/}
                                        </div>
                                        {/*//col*/}
                                        <div className="col-auto">
                                            <h4 className="app-card-title">Preferences</h4>
                                        </div>
                                        {/*//col*/}
                                    </div>
                                    {/*//row*/}
                                </div>
                                {/*//app-card-header*/}
                                <div className="px-4 app-card-body w-100">
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <strong>Language </strong>
                                                </div>
                                                <div className="item-data">English</div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Change
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <strong>Time Zone</strong>
                                                </div>
                                                <div className="item-data">
                                                    Central Standard Time (UTC-6)
                                                </div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Change
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <strong>Currency</strong>
                                                </div>
                                                <div className="item-data">$(US Dollars)</div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Change
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <strong>Email Subscription</strong>
                                                </div>
                                                <div className="item-data">Off</div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Change
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <strong>SMS Notifications</strong>
                                                </div>
                                                <div className="item-data">On</div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Change
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                </div>
                                {/*//app-card-body*/}
                                <div className="mt-auto app-card-footer p-4">
                                    <Link className="app-btn-secondary btn" href="#">
                                        Manage Preferences
                                    </Link>
                                </div>
                                {/*//app-card-footer*/}
                            </div>
                            {/*//app-card*/}
                        </div>
                        {/*//col*/}
                        <div className="col-12 col-lg-6">
                            <div className="d-flex flex-column align-items-start shadow-sm app-card app-card-account">
                                <div className="app-card-header p-3 border-bottom-0">
                                    <div className="align-items-center gx-3 row">
                                        <div className="col-auto">
                                            <div className="app-icon-holder">
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-shield-check"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                                                    />
                                                </svg>
                                            </div>
                                            {/*//icon-holder*/}
                                        </div>
                                        {/*//col*/}
                                        <div className="col-auto">
                                            <h4 className="app-card-title">Security</h4>
                                        </div>
                                        {/*//col*/}
                                    </div>
                                    {/*//row*/}
                                </div>
                                {/*//app-card-header*/}
                                <div className="px-4 app-card-body w-100">
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <strong>Password</strong>
                                                </div>
                                                <div className="item-data">••••••••</div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Change
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <strong>Two-Factor Authentication</strong>
                                                </div>
                                                <div className="item-data">
                                                    You haven&apos;t set up two-factor authentication.{" "}
                                                </div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Set up
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                </div>
                                {/*//app-card-body*/}
                                <div className="mt-auto app-card-footer p-4">
                                    <Link className="app-btn-secondary btn" href="#">
                                        Manage Security
                                    </Link>
                                </div>
                                {/*//app-card-footer*/}
                            </div>
                            {/*//app-card*/}
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="d-flex flex-column align-items-start shadow-sm app-card app-card-account">
                                <div className="app-card-header p-3 border-bottom-0">
                                    <div className="align-items-center gx-3 row">
                                        <div className="col-auto">
                                            <div className="app-icon-holder">
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-credit-card"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
                                                    />
                                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </div>
                                            {/*//icon-holder*/}
                                        </div>
                                        {/*//col*/}
                                        <div className="col-auto">
                                            <h4 className="app-card-title">Payment methods</h4>
                                        </div>
                                        {/*//col*/}
                                    </div>
                                    {/*//row*/}
                                </div>
                                {/*//app-card-header*/}
                                <div className="px-4 app-card-body w-100">
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <i className="fa-cc-visa fab me-2" />
                                                    <strong>Credit/Debit Card </strong>
                                                </div>
                                                <div className="item-data">1234*******5678</div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Edit
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                    <div className="py-3 border-bottom item">
                                        <div className="justify-content-between align-items-center row">
                                            <div className="col-auto">
                                                <div className="item-label">
                                                    <i className="fa-paypal fab me-2" />
                                                    <strong>PayPal</strong>
                                                </div>
                                                <div className="item-data">Not connected</div>
                                            </div>
                                            {/*//col*/}
                                            <div className="text-end col">
                                                <Link className="app-btn-secondary btn-sm" href="#">
                                                    Connect
                                                </Link>
                                            </div>
                                            {/*//col*/}
                                        </div>
                                        {/*//row*/}
                                    </div>
                                    {/*//item*/}
                                </div>
                                {/*//app-card-body*/}
                                <div className="mt-auto app-card-footer p-4">
                                    <Link className="app-btn-secondary btn" href="#">
                                        Manage Payment
                                    </Link>
                                </div>
                                {/*//app-card-footer*/}
                            </div>
                            {/*//app-card*/}
                        </div>
                    </div>
                    {/*//row*/}
                </div>
                {/*//container-fluid*/}
            </div>
            {/*//app-content*/}
            <Footer />
            {/*//app-footer*/}
        </div>

    </>
}