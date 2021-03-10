import {Button, Col, Menu, Row} from "antd"
import {Header} from "antd/lib/layout/layout"
import {Link} from 'react-router-dom'
import React from "react"
type TProp = {
    onLogout: () => void;
}
export const HeaderView = (props : TProp) => {
    const {onLogout} = props;
    return<Row>
        <Col>
            <Link to="/search">
                Поиск документов
            </Link>
        </Col>
        <Col offset={1}>
            <Link to="/add-doc">
                Создание документа
            </Link>
        </Col>
        <Col offset={14}>
            <Button onClick={onLogout}>Выход</Button>
        </Col>
    </Row> 
}