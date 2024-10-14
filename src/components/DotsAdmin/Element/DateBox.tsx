'use client'

export default function AdminDateBox () {

    return(
        <>
        <tr>
            <th>보도일자 <span className="star">*</span></th>
            <td>
                <div className="dateBox">
                    <input type="date" name="date" id="date"/>
                </div>
            </td>
        </tr>
        </>
    )
}