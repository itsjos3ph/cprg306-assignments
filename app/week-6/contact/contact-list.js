"use client"

import { useState } from "react";
import ContactCard from "./contact-card";
import contactData from "./contacts-info.json ";

export default function ContactList() {

    let contactArray = contactData.map( (contact) => ({...contact}) );

    let [filter, setFitler] = useState("all");

    return (
        <section>
            <div>
                <div>
                    <label>Filter By:</label>
                    <select>
                        <option value="all">All Contacts</option>
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <div>

                </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {contactArray.map( (contact) => (
                    <ContactCard key={contact.id} contactObj={contact} />
                ) )}
            </div>
        </section>
    );
}