import './ExpenseItem.css';

function ExpenseItem() {
    // 3월의 경우 2를 입력/ Date는 객체니까 텍스트로 출력될 수 없음. .toISOString() 메소드 사용
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    return (
        <div className="expense-item">
        {/* Shift+Alt+F Format document */}
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>

    )
}

export default ExpenseItem;