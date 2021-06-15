import React, { useEffect, useState } from "react";
import {
  Header,
  HeaderTitle,
  HeaderSubtitle,
  ContainerDetail,
  Body,
  ListDetails,
  Detail,
  Field,
  FieldValue,
  IconNavigation,
  Navigation,
} from "./RecordDetail.styles";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { formatDateFromString, formatterCurrency } from "../../utils";
import { ReactComponent as ArrowBack } from "../../assets/icons/arrowBack.svg";

function RecordDetail({ activities }) {
  const { id } = useParams();
  const [record, setRecord] = useState();

  const getRecord = (id) => {
    return activities.find((record) => record.id === id);
  };

  useEffect(() => {
    const newRecord = getRecord(id);
    setRecord(newRecord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <ContainerDetail>
      <Navigation>
        <IconNavigation to="/">
          <ArrowBack />
        </IconNavigation>
      </Navigation>
      {record ? (
        <>
          <Header>
            <HeaderTitle>{record.typeOfActivity}</HeaderTitle>
            <HeaderSubtitle>
              Actualizado: {formatDateFromString(record.updated_at)}
            </HeaderSubtitle>
          </Header>
          <Body>
            <ListDetails>
              <Detail>
                <Field>Estado:</Field>
                <FieldValue>{record.state}</FieldValue>
              </Detail>
              <Detail>
                <Field>Divisa:</Field>
                <FieldValue>COP</FieldValue>
              </Detail>
              {record.typeOfActivity === "intercambio" ? (
                <>
                  <Detail>
                    <Field>Comprado:</Field>
                    <FieldValue>
                      {record.bought > 1
                        ? formatterCurrency("es-CO", "COP").format(
                            record.bought
                          )
                        : record.bought}
                    </FieldValue>
                  </Detail>
                  <Detail>
                    <Field>Gastado:</Field>
                    <FieldValue>
                      {record.spent > 1
                        ? formatterCurrency("es-CO", "COP").format(record.spent)
                        : record.spent}
                    </FieldValue>
                  </Detail>
                </>
              ) : (
                <Detail>
                  <Field>Cantidad:</Field>
                  <FieldValue>{record.amount}</FieldValue>
                </Detail>
              )}
              <Detail>
                <Field>Costo:</Field>
                <FieldValue>{record.cost}</FieldValue>
              </Detail>
              <Detail>
                <Field>Creado en:</Field>
                <FieldValue>
                  {formatDateFromString(record.created_at)}
                </FieldValue>
              </Detail>
              <Detail>
                <Field>Actualizado en:</Field>
                <FieldValue>
                  {formatDateFromString(record.updated_at)}
                </FieldValue>
              </Detail>
              <Detail>
                <Field>Número de orden:</Field>
                <FieldValue>{record.id}</FieldValue>
              </Detail>
            </ListDetails>
          </Body>
        </>
      ) : (
        <Spinner />
      )}
    </ContainerDetail>
  );
}

const mapStateToProps = (state) => ({
  activities: state.activity.activities,
});
export default connect(mapStateToProps)(RecordDetail);
