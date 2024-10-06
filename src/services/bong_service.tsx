// BongService.ts
class BongService {
    private static instance: BongService;
    private value: number = 0; // 숫자 상태를 저장하는 변수
  
    private constructor() {}
  
    // 싱글톤 인스턴스 반환
    public static getInstance(): BongService {
      if (!BongService.instance) {
        BongService.instance = new BongService();
      }
      return BongService.instance;
    }
  
    // 현재 숫자 값을 반환
    public getValue(): number {
      return this.value;
    }
  
    // 숫자 값을 증가시키는 메소드
    public increment(): void {
      this.value += 1;
    }
  }
  
  export default BongService;
  