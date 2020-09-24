import React,  { Component }  from 'react';
import styles from './Users.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


export class Users extends Component {
    render() {
        return (
                <div className={styles.users}>
                    <h3>Statuts des Clients</h3>
                    <br />
                    <br />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>N°</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Pseudo</th>
                            <th>Statuts</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Lallier</td>
                            <td>Paul</td>
                            <td>Lallier Paul</td>
                            <td>Construction</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Serfati</td>
                            <td>benyamin</td>
                            <td>Serfati benyamin</td>
                            <td>Achat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Boularas</td>
                            <td>Nejma</td>
                            <td>Boularas Nejma</td>
                            <td>Vente</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Dupont</td>
                            <td>Coralie</td>
                            <td>Dupont Coralie</td>
                            <td>Vente</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Lessieurs</td>
                            <td>Samuel</td>
                            <td>Lessieurs Samuel</td>
                            <td>Construction</td>
                            </tr>
                            <tr>
                            <td>6</td>
                            <td>Aubert</td>
                            <td>Stephanie</td>
                            <td>Aubert Stephanie</td>
                            <td>Achat</td>
                            </tr>
                            <tr>
                            <td>7</td>
                            <td>Lallier</td>
                            <td>Paul</td>
                            <td>Lallier Paul</td>
                            <td>Construction</td>
                            </tr>
                            <tr>
                            <td>8</td>
                            <td>Serfati</td>
                            <td>benyamin</td>
                            <td>Serfati benyamin</td>
                            <td>Achat</td>
                            </tr>
                            <tr>
                            <td>9</td>
                            <td>Boularas</td>
                            <td>Nejma</td>
                            <td>Boularas Nejma</td>
                            <td>Vente</td>
                            </tr>
                            <tr>
                            <td>10</td>
                            <td>Dupont</td>
                            <td>Coralie</td>
                            <td>Dupont Coralie</td>
                            <td>Vente</td>
                            </tr>
                            <tr>
                            <td>11</td>
                            <td>Lessieurs</td>
                            <td>Samuel</td>
                            <td>Lessieurs Samuel</td>
                            <td>Construction</td>
                            </tr>
                            <tr>
                            <td>12</td>
                            <td>Aubert</td>
                            <td>Stephanie</td>
                            <td>Aubert Stephanie</td>
                            <td>Achat</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
        )
    }
}
export default Users;