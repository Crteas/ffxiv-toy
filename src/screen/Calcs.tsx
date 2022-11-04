import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1000px;
  height: 500px;
`;

const CalcInput = styled.input`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1px black solid;
  margin-right: 10px;
  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

const CalcForm = styled.form`
  width: 900px;
  height: 300px;
  margin: 50px;
  border: 1px yellow solid;
  padding: 5px;
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
  const [isTax, setisTax] = useState(false);
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
  console.log(priceArr);
  return (
    <Wrapper>
      <CalcForm onSubmit={handleSubmit(onSubmit)}>
        <CalcInput type="text" {...register("name1")} />
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
            <CalcInput type="text" {...register("name2")} />
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
            <CalcInput type="text" {...register("name3")} />
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
            <CalcInput type="text" {...register("name4")} />
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
            <CalcInput type="text" {...register("name5")} />
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
            <CalcInput type="text" {...register("name6")} />
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
            <CalcInput type="text" {...register("name2")} />
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
      <button onClick={countDown}>마이너스</button>
      <span style={{ color: "white" }}>{count}</span>
      <button onClick={countUp}>플러스</button>
      <div style={{ color: "yellow" }}>
        {`총 합 : ${priceArr.reduce((a, b) => a + b)}`}
      </div>
      <div style={{ color: "yellow" }}>
        {`총 합 (수수료 포함) : 
        ${priceArr.reduce((a, b) => a + (b + Math.floor((b * 5) / 100)), 0)}`}
      </div>
    </Wrapper>
  );
}
//total + Math.floor((total * 5) / 100);

export default Calcs;
