import React from 'react'
import { Button, Layout, HeaderBack, CellBlock, FilePicker } from '../../components/dingyi.js'
class PageFilePicker extends React.Component {
    render() {
        return (
            <Layout style={{ background: '#eee' }}>
                <HeaderBack>
                    PageFilePicker
                </HeaderBack>

                <CellBlock title="单选">
                    <FilePicker
                        onSelect={(files) => {
                        }} />
                </CellBlock>
                <CellBlock title="多选">
                    <FilePicker
                        multiple
                        onSelect={(files) => {
                        }} />
                </CellBlock>
            </Layout>
        )
    }
}

export default PageFilePicker