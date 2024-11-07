'use client'

interface Props {
    data: any
    onChange : Function
}

export default function AdminDateBox ({data, onChange}: Props) {
    return(
        <>
        <tr>
            <th>보도일자 <span className="star">*</span></th>
            <td>
                <div className="dateBox">
                    <input type="date" name="date" id="date" value={data?.date} onChange={(e)=>onChange(e)} />
                </div>
            </td>
        </tr>
        </>
    )
}
