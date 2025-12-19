import { baseurl, cookie } from "@/utils/constants";

// pages/api/login.ts
export async function POST(req: Request) {


    const body = await req.json();
    console.log("req=>", req, body);

    // if (req.method !== "POST") {
    //     return res.status(405).json({ error: "Method not allowed" });
    // }

    const formData = new URLSearchParams();
    formData.append("mobile", body.mobile);
    formData.append("name", body.name);
    formData.append("email", body.email);
    formData.append("token", body.token);
    formData.append("'pancard", "");
    formData.append('isUserFromLogin', "0");

    const apiRes = await fetch(`${baseurl}/InsertCustomer.php`, {
        method: "POST",
        headers: {
            Cookie: cookie, // or dynamic if needed
        },
        body: formData,
    });

    const data = await apiRes.json();
    console.log("data=>", data);

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
