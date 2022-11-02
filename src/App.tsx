import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

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
};

const CalcForm = styled.form``;

function App() {
  const [count, setCount] = useState(1);
  const [priceArr, setPriceArr] = useState([0, 0, 0, 0, 0, 0, 0]);
  const { register, handleSubmit, watch, getValues } = useForm<items>({
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
  });
  const onSubmit: SubmitHandler<items> = () => {};

  const items = watch();

  const countUp = () => {
    if (count >= 7) return;
    //console.log(priceArr[count]);
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    if (count <= 1) return;
    console.log(priceArr[count - 1]);
    setCount((prev) => prev - 1);
  };

  /**
   *
   * @param item 배열
   * @param index 값을 변경할 배열 인덱스
   * @param value 값
   * @param value2 가공할 값
   * @returns 가공후 들어갈 배열을 리턴
   */
  const addArr2Value = (
    item: number[],
    index: number,
    value: number,
    value2?: number
  ) => {
    const temp = item;
    temp.splice(index, 1, value2 ? value * value2 : 0);
    return temp;
  };

  type inputProps = {
    itemName:
      | "name1"
      | "name2"
      | "name3"
      | "name4"
      | "name5"
      | "name6"
      | "name7";
    itemCount:
      | "count1"
      | "count2"
      | "count3"
      | "count4"
      | "count5"
      | "count6"
      | "count7";
    itemPrice:
      | "price1"
      | "price2"
      | "price3"
      | "price4"
      | "price5"
      | "price6"
      | "price7";
  };

  return (
    <>
      <CalcForm onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name1")} />
        <input
          type="number"
          {...register("count1", {
            onChange: (e) =>
              setPriceArr((item) =>
                addArr2Value(item, 0, Number(e.target.value), items.price1)
              ),
          })}
        />
        <input
          type="number"
          {...register("price1", {
            onChange: (e) =>
              setPriceArr((item) =>
                addArr2Value(item, 0, Number(e.target.value), items.count1)
              ),
          })}
        />
        <span>{getValues("price1") * getValues("count1")}</span>

        {count >= 2 ? (
          <>
            <br />
            <input type="text" {...register("name2")} />
            <input
              type="number"
              {...register("count2", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 1, Number(e.target.value), items.price2)
                  ),
              })}
            />
            <input
              type="number"
              {...register("price2", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 1, Number(e.target.value), items.count2)
                  ),
              })}
            />
            <span>{getValues("price2") * getValues("count2")}</span>
          </>
        ) : null}
        {count >= 3 ? (
          <>
            <br />
            <input type="text" {...register("name3")} />
            <input
              type="number"
              {...register("count3", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 2, Number(e.target.value), items.price3)
                  ),
              })}
            />
            <input
              type="number"
              {...register("price3", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 2, Number(e.target.value), items.count2)
                  ),
              })}
            />
            <span>{getValues("price3") * getValues("count3")}</span>
          </>
        ) : null}
        {count >= 4 ? (
          <>
            <br />
            <input type="text" {...register("name4")} />
            <input
              type="number"
              {...register("count4", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 3, Number(e.target.value), items.price4)
                  ),
              })}
            />
            <input
              type="number"
              {...register("price4", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 3, Number(e.target.value), items.count4)
                  ),
              })}
            />
            <span>{getValues("price4") * getValues("count4")}</span>
          </>
        ) : null}
        {count >= 5 ? (
          <>
            <br />
            <input type="text" {...register("name5")} />
            <input
              type="number"
              {...register("count5", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 4, Number(e.target.value), items.price5)
                  ),
              })}
            />
            <input
              type="number"
              {...register("price5", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 4, Number(e.target.value), items.count5)
                  ),
              })}
            />
            <span>{getValues("price5") * getValues("count5")}</span>
          </>
        ) : null}
        {count >= 6 ? (
          <>
            <br />
            <input type="text" {...register("name6")} />
            <input
              type="number"
              {...register("count6", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 5, Number(e.target.value), items.price6)
                  ),
              })}
            />
            <input
              type="number"
              {...register("price6", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 5, Number(e.target.value), items.count6)
                  ),
              })}
            />
            <span>{getValues("price6") * getValues("count6")}</span>
          </>
        ) : null}
        {count >= 7 ? (
          <>
            <br />
            <input type="text" {...register("name2")} />
            <input
              type="number"
              {...register("count7", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 6, Number(e.target.value), items.price7)
                  ),
              })}
            />
            <input
              type="number"
              {...register("price7", {
                onChange: (e) =>
                  setPriceArr((item) =>
                    addArr2Value(item, 6, Number(e.target.value), items.count7)
                  ),
              })}
            />
            <span>{getValues("price7") * getValues("count7")}</span>
          </>
        ) : null}
      </CalcForm>
      <button onClick={countUp}>플러스</button>
      {count}
      <button onClick={countDown}>마이너스</button>
    </>
  );
}

export default App;
