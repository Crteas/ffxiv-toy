import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f7d794;
`;

const CalcInput = styled.input`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1px #f7d794 solid;
  margin-right: 10px;
  font-size: 17px;
  color: #f7d794;
  &:focus {
    outline: none;
  }
`;

const CalcForm = styled.form`
  width: 850px;
  height: 300px;
  margin: 50px 0 50px 0;
  padding: 5px;
  padding-left: 30px;
  background-color: #596275;
  box-sizing: border-box;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 200px 100px 0.3fr 1fr;
  grid-template-rows: repeat(7, 1fr);

  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const InfoController = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  &::selection {
    background-color: none;
  }
`;

const CountBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  display: flex;
`;

const CountSvg = styled.svg`
  width: 45px;
  height: 45px;
  fill: #f3a683;
`;

const CountSpan = styled.span`
  font-size: 45px;
  color: #f7d794;
  &::selection {
    background-color: red;
  }
`;

const TotalInfo = styled.div`
  color: #becfff;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const TotalValue = styled.div`
  font-size: 20px;
  margin-top: 20px;
  font-size: 40px;
`;

type items = {
  name1: string;
  name2: string;
  name3: string;
  name4: string;
  name5: string;
  name6: string;
  name7: string;
  count1: number;
  count2: number;
  count3: number;
  count4: number;
  count5: number;
  count6: number;
  count7: number;
  price1: number;
  price2: number;
  price3: number;
  price4: number;
  price5: number;
  price6: number;
  price7: number;
  [key: string]: string | number;
};

function Calcs() {
  const [count, setCount] = useState(1);
  const [priceArr, setPriceArr] = useState([0, 0, 0, 0, 0, 0, 0]);
  const { register, handleSubmit, watch, setValue, getValues } = useForm<items>(
    {
      defaultValues: {
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
        count5: 0,
        count6: 0,
        count7: 0,
        price1: 0,
        price2: 0,
        price3: 0,
        price4: 0,
        price5: 0,
        price6: 0,
        price7: 0,
      },
    }
  );
  const a = watch();
  const onSubmit: SubmitHandler<items> = () => {};
  const countUp = () => {
    if (count >= 7) return;
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    if (count <= 1) return;
    setPriceArr((item) => {
      const temp = item;
      temp.splice(count - 1, 1, 0);
      return temp;
    });
    const delCount = `count${count}`;
    const delPrice = `price${count}`;
    const delName = `name${count}`;
    setValue(delCount, 0);
    setValue(delPrice, 0);
    setValue(delName, "");
    setCount((prev) => prev - 1);
  };
  const totalPrice = (Index: number) => {
    const price = getValues(`price${Index}`) as number;
    const count = getValues(`count${Index}`) as number;
    const total = price * count;
    return total;
  };
  const onTaxTotalPrice = (Index: number) => {
    const price = getValues(`price${Index}`) as number;
    const count = getValues(`count${Index}`) as number;
    const total = price * count;
    return total + Math.floor((total * 5) / 100);
  };

  /**
   *
   * @param item 배열
   * @param index 값을 변경할 배열 인덱스
   * @returns 가공후 들어갈 배열을 리턴
   */
  const addArr2Value = (item: number[], index: number) => {
    const temp = item;
    temp.splice(index, 1, totalPrice(index + 1));
    return temp;
  };
  return (
    <Wrapper>
      <CalcForm onSubmit={handleSubmit(onSubmit)}>
        <CalcInput
          type="text"
          placeholder="아이템이름"
          {...register("name1")}
        />
        <CalcInput
          type="number"
          min="0"
          {...register("count1", {
            onChange: (e) => setPriceArr((item) => addArr2Value(item, 0)),
          })}
        />
        <CalcInput
          type="number"
          min="0"
          {...register("price1", {
            onChange: (e) => setPriceArr((item) => addArr2Value(item, 0)),
          })}
        />
        <span>{`가격:${totalPrice(1)} (수수료포함: ${onTaxTotalPrice(
          1
        )})`}</span>

        {count >= 2 ? (
          <>
            <CalcInput
              type="text"
              placeholder="아이템이름"
              {...register("name2")}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("count2", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 1)),
              })}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("price2", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 1)),
              })}
            />
            <span>{`가격:${totalPrice(2)} (수수료포함: ${onTaxTotalPrice(
              2
            )})`}</span>
          </>
        ) : null}
        {count >= 3 ? (
          <>
            <CalcInput
              type="text"
              placeholder="아이템이름"
              {...register("name3")}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("count3", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 2)),
              })}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("price3", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 2)),
              })}
            />
            <span>{`가격:${totalPrice(3)} (수수료포함: ${onTaxTotalPrice(
              3
            )})`}</span>
          </>
        ) : null}
        {count >= 4 ? (
          <>
            <CalcInput
              type="text"
              placeholder="아이템이름"
              {...register("name4")}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("count4", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 3)),
              })}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("price4", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 3)),
              })}
            />
            <span>{`가격:${totalPrice(4)} (수수료포함: ${onTaxTotalPrice(
              4
            )})`}</span>
          </>
        ) : null}
        {count >= 5 ? (
          <>
            <CalcInput
              type="text"
              placeholder="아이템이름"
              {...register("name5")}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("count5", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 4)),
              })}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("price5", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 4)),
              })}
            />
            <span>{`가격:${totalPrice(5)} (수수료포함: ${onTaxTotalPrice(
              5
            )})`}</span>
          </>
        ) : null}
        {count >= 6 ? (
          <>
            <CalcInput
              type="text"
              placeholder="아이템이름"
              {...register("name6")}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("count6", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 5)),
              })}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("price6", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 5)),
              })}
            />
            <span>{`가격:${totalPrice(6)} (수수료포함: ${onTaxTotalPrice(
              6
            )})`}</span>
          </>
        ) : null}
        {count >= 7 ? (
          <>
            <CalcInput
              type="text"
              placeholder="아이템이름"
              {...register("name2")}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("count7", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 6)),
              })}
            />
            <CalcInput
              type="number"
              min="0"
              {...register("price7", {
                onChange: (e) => setPriceArr((item) => addArr2Value(item, 6)),
              })}
            />
            <span>{`가격:${totalPrice(7)} (수수료포함: ${onTaxTotalPrice(
              7
            )})`}</span>
          </>
        ) : null}
      </CalcForm>
      <InfoController>
        <CountBtn>
          <CountSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={countDown}
          >
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </CountSvg>
        </CountBtn>
        <CountSpan>{count}</CountSpan>
        <CountBtn>
          <CountSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={countUp}
          >
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </CountSvg>
        </CountBtn>
      </InfoController>
      <TotalInfo>
        <TotalValue>{`총 합 : ${priceArr.reduce((a, b) => a + b)}`}</TotalValue>
        <TotalValue>
          {`총 합  : 
        ${priceArr.reduce(
          (a, b) => a + (b + Math.floor((b * 5) / 100)),
          0
        )} (수수료 포함)`}
        </TotalValue>
      </TotalInfo>
    </Wrapper>
  );
}

export default Calcs;
