import React from 'react'
import { RECORD } from '../[uid]/page'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { RefreshCcw } from 'lucide-react'

function SelectionDetail({ record, regenrateCode, isReady }: any) {
    return record && (
        <div className="p-5  rounded-lg max-h-[100vh] border border-[#5b3bb2] m-0">
            <h2 className='font-bold my-2 text-white'>Wireframe</h2>
            <Image src={record?.imageUrl} alt='Wireframe' width={300} height={400}
                className='rounded-lg object-contain h-[200px] w-full border border-[#5d40b5] border-dashed p-2'
            />

            <h2 className='font-bold mt-4 mb-2 text-white'>AI Model</h2>
            <Input defaultValue={record?.model} disabled={true} className='border-2 border-[#6d3cff] bg-white' />

            <h2 className='font-bold mt-4 mb-2 text-white'>Description</h2>
            <Textarea defaultValue={record?.description} disabled={true}
                className='border-2 border-[#6d3cff] bg-white h-[126px]' />

            <Button className='mt-7 w-full bg-[#5b3bb2] hover:bg-[#4e2cad]' disabled={!isReady} onClick={() => regenrateCode()} > <RefreshCcw /> Regenerate Code</Button>
        </div>
    )
}

export default SelectionDetail